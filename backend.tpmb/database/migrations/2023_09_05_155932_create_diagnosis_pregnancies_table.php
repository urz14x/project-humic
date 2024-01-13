<?php
//Kehamilan
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diagnosis_pregnancies', function (Blueprint $table) {
            $table->id();
            $table->foreignId("category_service_id")->constrained()->cascadeOnDelete();
            $table->string("hpht");
            $table->string("mestruation_time");
            $table->string("mestruation_cycle");
            $table->string("fetal_movement");
            $table->text("diseases_are_being_felt");
            $table->text("common_complaints");
            $table->text("herbs_consumed");
            $table->string("concerns_about_pregnancy");
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
        Schema::dropIfExists('diagnosis_pregnancies');
    }
};
