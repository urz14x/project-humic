<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Models\CategoryService;

class CategoryServiceController extends Controller
{
    public function index(){
        return CategoryResource::collection(CategoryService::get());
    }
}
