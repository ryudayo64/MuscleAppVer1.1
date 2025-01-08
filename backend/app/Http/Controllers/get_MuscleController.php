<?php

namespace App\Http\Controllers;

use App\Models\s_muscle;
use Illuminate\Http\Request;

class get_MuscleController extends Controller
{
    //s_muscleテーブルからデータを取得
    public function get_MuscleController()
    {
        // s_muscleモデルを使い、データを取得する
        $muscles = s_muscle::all();

        \Log::info($muscles);
        // JSON形式でデータを返す
        return response()->json($muscles);
    }
}
