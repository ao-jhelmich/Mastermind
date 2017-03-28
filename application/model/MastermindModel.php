<?php 

/*
* mastermind model that has all the databse querys
* and function
*/
class MastermindModel
{
  	public static function createHighscore($name, $time, $gameLength, $userChoices)
    {
        if (!$name || strlen($name) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }
        if (!$time || strlen($time) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }
        if (!$gameLength || strlen($gameLength) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }
        if (!$userChoices || strlen($userChoices) == 0) {
            Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
            return false;
        }

        $database = DatabaseFactory::getFactory()->getConnection();

        $sql = "INSERT INTO scores (name, time, gameLength, userChoices) VALUES (:name, :time, :gameLength, :userChoices)";
        var_dump($sql);
        $query = $database->prepare($sql);
        $query->execute(array(':note_text' => $note_text, ':time' => $time,':gameLength' => $gameLength,':userChoices' => $userChoices));

        if ($query->rowCount() == 1) {
            return true;
        }

        // default return
        Session::add('feedback_negative', Text::get('FEEDBACK_NOTE_CREATION_FAILED'));
        return false;
    }
}