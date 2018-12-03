<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Action;

class ActionController extends Controller
{
    //Actionの
    public function getActions()
    {
        $actions = Action::all();
        return $actions;
    }
    public function addAction(Request $request)
    {
        $action = new Action;
        $action->user_id = $request->user_id;
        $action->function31 = $request->function31;
        $action->scene_id = $request->scene_id;
        $action->character_id = $request->character_id;
        $action->target = $request->target;
        $action->motive = $request->motive;
        $action->action_note = $request->action_note;
        $action->save();

        $actions = Action::all();
        return $actions;
    }
}
