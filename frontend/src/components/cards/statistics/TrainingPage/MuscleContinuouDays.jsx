import { memo, useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import axios from 'axios';
import 'dayjs/locale/ja'; // 日本語ロケールをインポート
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { Button, Container, Typography } from '@mui/material';
import 'app.css';
// プラグインを登録
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ja'); // Day.jsで日本語を有効化
// ------------------------------------------------------------------------------------------

//「今日の日付」ページをリロードして一番初めに表示された時点
const initialValue = dayjs.utc(new Date().getTime()).tz('Asia/Tokyo');

const ServerDay = memo(
  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, LongPress, ...other } = props;

    // 現在の日付の初期化
    const today = dayjs().tz('Asia/Tokyo').startOf('day');
    const isLongPress = LongPress ? 'calenderDay_long-press' : ''; // ロングプレス時のクラス
    const isSelected = !outsideCurrentMonth && highlightedDays.indexOf(day.date()) >= 0;
    const TodayDisplay = isSelected && !outsideCurrentMonth && highlightedDays.indexOf(day.date()) >= 0 && !day.isSame(today, 'day');

    // 曜日取得（日本語化）
    dayjs.locale('ja'); // 日本語ロケール設定
    const dayOfWeek = day.format('dd'); // "日", "月", "火", "水", "木", "金", "土"

    // 曜日による色分けクラス
    const dayClass =
      dayOfWeek === '日' // 日曜日
        ? 'sunday' // 赤色クラス
        : dayOfWeek === '土' // 土曜日
          ? 'saturday' // 青色クラス
          : '';

    return (
      <Badge key={day.toString()} overlap="circular" badgeContent={isSelected ? '💪' : undefined}>
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
          className={`${isLongPress} ${dayClass} ${TodayDisplay ? 'selected-day' : ''}`}
        />
      </Badge>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.highlightedDays === nextProps.highlightedDays && prevProps.outsideCurrentMonth === nextProps.outsideCurrentMonth;
  }
);

const MuscleContinuouDays = () => {
  // 無駄なリクエスト中断
  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  // 日付保存
  const [highlightedDays, setHighlightedDays] = useState([]);
  // カレンダー表示・非表示
  // const [CalenderOpen, setCalenderOpen] = useState();
  const [MuscleCalender, setMuscleCalender] = useState({
    today: initialValue,
    LongPress: false //日付長押し状態
  });
  // 複数選択された日付の追跡
  const [MultipleSelection, setMultipleSelection] = useState([]);
  const [muscleCount, setMuscleCount] = useState(0);

  const timerRef = useRef(null);

  // 年・月・日付・が変更された時に動く
  const fetchHighlightedDays = async (dateValue) => {
    // 12から19日
    const date = dateValue.$y + '-' + (dateValue.$M + 1) + '-' + dateValue.$D;
    console.log('date', date);
    try {
      // Laravel側からデータを送信&受信
      const response = await axios.get('http://localhost:8000/get_WorkOutContinuousDays', {
        params: {
          date: date,
          user_id: 46497
        }
      });
      console.log('response.data:formattedDays', response.data);

      if (
        response.data &&
        response.data['workout_dates'] &&
        Array.isArray(response.data['workout_dates'])
      ) {
        // 日付だけ格納
        const formattedDays = response.data['workout_dates'].map((dateStr) => {
          return dayjs(dateStr).$D;
        });

        // 筋トレした日💪表示
        setHighlightedDays(formattedDays);
        // 親：AnalyticEcommerceに値を渡す。
        setMuscleCount(response.data['total_count']);
      } else {
        console.log('No workout dates found or invalid format.');
      }

      // setIsLoading(false);
    } catch (error) {
      return console.log('error', error);
    }
    setIsLoading(false); // ローディング終了
  };

  const handleChangeMonth = (date) => {
    setIsLoading(true);
    Calender(date);
  };

  // トレ日クリックして登録
  const handleChangeDay = (clickDay) => {
    // console.log('Selected Date:', clickDay.format('YYYY-MM-DD'));
    // console.log('Selected initialValue:', initialValue.format('YYYY-MM-DD'));
    let clickDate = clickDay.format('YYYY-MM-DD');
    let today = initialValue.format('YYYY-MM-DD');

    try {
      if (clickDate <= today) {
        // Laravel側からデータを送信&受信
        const response = axios.get('http://localhost:8000/WorkOutContinuousDays', {
          params: { date: clickDate }
        });

        if (response) {
          Calender(clickDay);
        }
      } else {
        alert('今日以降は登録できません。');
      }
    } catch (err) {
      console.log('err:', err);
    }
  };

  // マウスのボタンを押した瞬間
  const handleMouseDown = () => {
    console.log('handleChangeDay');
    timerRef.current = setTimeout(() => {
      setMuscleCalender((prev) => ({
        ...prev,
        LongPress: true
      }));
    }, 800);
  };

  // マウスのボタンを話した瞬間
  const handleMouseUp = () => {
    clearTimeout(timerRef.current);
  };

  // 現在の年月日のカレンダーを表示する。
  useEffect(() => {
    console.log('initialValue', initialValue);
    fetchHighlightedDays(initialValue);
    return () => requestAbortController.current?.abort();
  }, []);

  // 今日の日付を取得
  useEffect(() => {
    console.log('MuscleCalender', MuscleCalender);
  }, [MuscleCalender]);

  function Calender(date) {
    if (MuscleCalender.LongPress === true) {
      console.log('長押しが最終的に通りました。');
      // 長押しが最終的に通ったら 日付をクリックして
      setHighlightedDays([]);
      // 選択された日付を表示。
      setMultipleSelection((prev) => {
        // 配列内に重複データがないか確認し、なければそのまま値を代入、あればパスする処理
        // なぜ以下の処理をするのか？➡︎複数選択の際に同じ日付を何度も保存してしまうため。
        const isAlreadySelected = prev.some(
          (item) => item.$d.getTime() === MuscleCalender.today.$d.getTime(),
          console.log('MuscleCalender.today.$d.getTime()', date.$d.getTime())
        );

        // 重複データがあった場合は何も追加せずに終了させる
        if (isAlreadySelected) {
          return prev;
        }

        return [...prev, date];
      });
    } else {
      console.log('長押しが最終的に通っていない。');
      console.log('date', date);
      setHighlightedDays([]);
      fetchHighlightedDays(date);
    }
  }
  // useEffect(() => {
  // if (!CalenderOpen && MuscleCalender.LongPress === true) {
  //   console.log('長押しが最終的に通りました。');
  //   // 長押しが最終的に通ったら 日付をクリックして
  //   setHighlightedDays([]);
  //   // 選択された日付を表示。
  //   setMultipleSelection((prev) => {
  //     // 配列内に重複データがないか確認し、なければそのまま値を代入、あればパスする処理
  //     // なぜ以下の処理をするのか？➡︎複数選択の際に同じ日付を何度も保存してしまうため。
  //     const isAlreadySelected = prev.some(
  //       (item) => item.$d.getTime() === MuscleCalender.today.$d.getTime(),
  //       console.log('MuscleCalender.today.$d.getTime()', MuscleCalender.today.$d.getTime())
  //     );

  //     // 重複データがあった場合は何も追加せずに終了させる
  //     if (isAlreadySelected) {
  //       return prev;
  //     }

  //     return [...prev, MuscleCalender.today];
  //   });
  // } else {
  //   // console.log('長押しが最終的に通っていない。');
  //   // console.log('MuscleCalender.today', MuscleCalender.today);
  //   setHighlightedDays([]);
  //   fetchHighlightedDays(MuscleCalender.today);
  // }
  // }, [CalenderOpen, MuscleCalender.today]);

  return (
    <>
      <Container>
        <Typography variant="h3">{muscleCount + '日'}</Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ja">
          <DateCalendar
            defaultValue={initialValue}
            loading={isLoading}
            onMonthChange={(e) => handleChangeMonth(e)}
            onChange={(e) => handleChangeDay(e)} // 日付がクリックされた時の処理
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            renderLoading={() => <DayCalendarSkeleton />}
            slots={{
              day: ServerDay
            }}
            slotProps={{
              day: {
                highlightedDays,
                LongPress: MuscleCalender.LongPress
              },
              calendarHeader: {
                format: 'YYYY年MM月'
              }
            }}
            sx={{
              backgroundColor: 'white',
              borderRadius: '10px',
              zIndex: '1300',
              '& .css-1n0erti-MuiTypography-root-MuiDayCalendar-weekDayLabel': {
                margin: '0px'
              },
              '& .MuiDayCalendar-weekDayLabel': {
                '&:nth-of-type(1)': { color: '#FF5630' }, // 日曜日
                '&:nth-of-type(7)': { color: '#00B8D9' } // 土曜日
              }
            }}
          />
        </LocalizationProvider>
      </Container>
    </>
  );
};

export default MuscleContinuouDays;
