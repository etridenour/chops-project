import { IExerciseDto } from "../dto/exercise.dto";
import { IExercise } from "../../models/exercise";

export function convertExerciseDtoToModel(dto: IExerciseDto): IExercise {
    return {
        ...dto,
        id: dto._id
    }
}