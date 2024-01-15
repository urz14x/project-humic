<?php

use Carbon\Carbon;
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
        Schema::create('patients', function (Blueprint $table) {
            $table->id();
            $table->foreignId("midwife_id")->constrained()->cascadeOnDelete();
            $table->nullableMorphs("patientable");
            $table->string("fullname");
            $table->string("place_of_birth");
            $table->string("date_of_birth");
            $table->string("address");
            $table->string("status");
            $table->string("nik")->unique();
            $table->string("no_rm")->unique();
            $table->string("total_payment")->nullable();
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
        Schema::dropIfExists('patients');
    }
};
