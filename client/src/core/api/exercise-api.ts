import { IExercise } from "../../components/Exercises/models/exercise";
import { ENVIRONMENT } from "../../environments";
import { RequestMethods } from "./request-methods";

const exerciseUrl = `${ENVIRONMENT}/exercises`;

const getAllExercises = async () => {
  try {
    const response = await fetch(exerciseUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const createNewExercise = async (form: IExercise) => {
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

const editExercise = async (exercise: IExercise) => {
  try {
    await fetch(`${exerciseUrl}/${exercise._id}`, {
      method: RequestMethods.Put,
      body: JSON.stringify(exercise),
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
