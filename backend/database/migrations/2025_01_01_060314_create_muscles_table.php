<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('s_muscles', function (Blueprint $table) {
            $table->id(); // id カラム (自動採番)
            $table->string('name'); // 筋肉名
            $table->string('location'); // 部位（例: 胸、肩、背中など）
            $table->text('description')->nullable(); // 筋肉の詳細説明（オプション）
            $table->string('image_url', 500)->nullable(); // 画像URL（オプション）
            $table->text('benefits')->nullable(); // 筋肉を鍛えるメリット（オプション）
            $table->timestamps(); // created_at と updated_at カラム
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('s_muscles');
    }
};
