 <?php

    use App\Http\Controllers\Auth\{LoginController, LogoutController, RegisterController, ProfileController};

    use App\Http\Controllers\Patient\AllPatientController;
    use App\Http\Controllers\Patient\CategoryServiceController;
    use App\Http\Controllers\Patient\LaborController;
    use App\Http\Controllers\Patient\PatientController;
    use App\Http\Controllers\Patient\PostpartumController;
    use App\Http\Controllers\Patient\PregnancyController;

    use App\Http\Controllers\TotalAllCountController;
    use Illuminate\Support\Facades\Route;

    Route::post("/v1/register", RegisterController::class);
    Route::post("/v1/login", LoginController::class);


    Route::get("/v1/total-count", [TotalAllCountController::class, 'all_count']);

    Route::apiResource('/v1/patients', PatientController::class);
    Route::get("/v1/all-patients", [AllPatientController::class, 'index']);
    Route::get("/v1/category/pregnancy", [AllPatientController::class, 'show_pregnancies']);
    Route::get("/v1/category/labors", [AllPatientController::class, 'show_labors']);
    //Kategori layanan
    Route::get('/v1/patients/create/diagnosis', [CategoryServiceController::class, 'index']);

    //kehamilan
    Route::post('/v1/patients/pregnancy', PregnancyController::class);
    //Persalinan
    Route::post('/v1/patients/labor', LaborController::class);
    // Nifas
    Route::post('/v1/patients/postpartum', PostpartumController::class);


    Route::middleware('auth:sanctum')->group(function () {
        //Midwife controller
        Route::get("/v1/account/profile", ProfileController::class);
        Route::post("/v1/account/logout", LogoutController::class);
    });
