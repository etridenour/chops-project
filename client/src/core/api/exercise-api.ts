import { ENVIRONMENT } from "../../environments";
import { convertExerciseDtoToModel } from "./converters/convert-exercise-dto-to-model";
import { IExerciseForm } from "../models/new-exercise-form";
import { IExerciseDto } from "./dto/exercise.dto";
import { RequestMethods } from "./request-methods";

const exerciseUrl = `${ENVIRONMENT}/exercises`;

const getAllExercises = async () => {
  try {
    const response = await fetch(exerciseUrl);
    const exercises = await response.json();
    return exercises.map((exercise: IExerciseDto) =>
      convertExerciseDtoToModel(exercise)
    );
  } catch (error) {
    console.log(error);
  }
};

const createNewExercise = async (form: IExerciseForm) => {
  try {
    const response = await fetch(exerciseUrl, {
      method: RequestMethods.Post,
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const editExercise = async (id: string, form: IExerciseForm) => {
  try {
    await fetch(`${exerciseUrl}/${id}`, {
      method: RequestMethods.Put,
      body: JSON.stringify(form),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  }
  catch (error) {
    console.log(error)
  }
}

const deleteExercise = async (id: string) => {
  try {
    return await fetch(`${exerciseUrl}/${id}`, {
      method: RequestMethods.Delete,
    });
  } catch (error) {
    console.log(error);
  }
};

const exerciseApi = { getAllExercises, createNewExercise, editExercise, deleteExercise };
export default exerciseApi;
