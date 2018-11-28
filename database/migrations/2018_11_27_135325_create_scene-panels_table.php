<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateScenePanelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('scenepanels', function (Blueprint $table) {
            $table->increments('scenepanel_id');
            $table->integer('user_id');
            $table->integer('scene_id');
            $table->integer('light');
            $table->integer('sound');
            $table->text('scenepanel_note')->nullable()->change();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('scenepanels');
    }
}
