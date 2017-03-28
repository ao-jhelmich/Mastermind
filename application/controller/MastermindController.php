<?php 

/*
* The mastermind controller.
* All the features are redirected trough here
*/
class MastermindController extends controller
{
	
	function __construct()
	{
		parent::__construct();
	}

	public function index()
    {
        $this->View->render('mastermind/index');
    }

    public function insert()
    {
    	MastermindModel::createHighscore();
    }
}