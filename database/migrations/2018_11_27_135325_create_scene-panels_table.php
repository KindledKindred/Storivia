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
            $table->int('user_id');
            $table->int('scene_id');
            $table->int('light');
            $table->int('sound');
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
