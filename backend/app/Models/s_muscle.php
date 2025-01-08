<?php
// app/Models/s_muscle.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class s_muscle extends Model
{
    use HasFactory;

    // このテーブルの主キーとタイムスタンプを自動で処理
    protected $primaryKey = 'id';
    public $timestamps = true;

    // マスアサインメントを許可するカラム
    protected $fillable = [
        'name',
        'location',
        'description',
        'image_url',
        'benefits', // 新たに追加した benefits カラム
    ];
}
