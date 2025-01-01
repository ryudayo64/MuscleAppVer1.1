<?php

namespace App\Http\Controllers;
use App\Models\s_work_out_registration;
use Illuminate\Http\Request;

class WorkOutContinuousDays extends Controller
{
    public function WorkOutContinuousDays(Request $request)
    {
        $CalenderDates = $request->input('date');

        // 配列でない場合も考慮して配列に変換
        if (!is_array($CalenderDates)) {
            $CalenderDates = [$CalenderDates];
        }

        try {
            foreach ($CalenderDates as $CalenderDate) {
                // 既存データの確認
                $existingRecord = s_work_out_registration::where('user_id', 46497)
                    ->whereDate('workout_date', $CalenderDate)
                    ->first();

                if ($existingRecord) {
                    // 既存データがあれば削除
                    $existingRecord->delete();
                } else {
                    // 既存データがなければ登録
                    $workoutRegistration = [
                        'user_id' => 46497,
                        'workout_date' => $CalenderDate
                    ];
                    s_work_out_registration::create($workoutRegistration);
                }
            }


            // レコード数を返す
            return response()->json("success");
        } catch (\Exception $e) {
            \Log::error('WorkOutContinuousDays: エラー');
            \Log::error($e);

            // エラーを返す
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
