import { IClickTrack } from "../../components/ClickTrackBuilder/models/click-track";
import { ENVIRONMENT } from "../../environments";
import { RequestMethods } from "./request-methods";

const clickTrackUrl = `${ENVIRONMENT}/clickTracks`;

const getAllClickTracks = async () => {
  try {
    const response = await fetch(clickTrackUrl);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const createNewClickTrack = async (clickTrack: IClickTrack) => {
  try {
    const response = await fetch(clickTrackUrl, {
      method: RequestMethods.Post,
      body: JSON.stringify(clickTrack),
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

const editClickTrack = async (clickTrack: IClickTrack) => {
  try {
    await fetch(`${clickTrackUrl}/${clickTrack._id}`, {
      method: RequestMethods.Put,
      body: JSON.stringify(clickTrack),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteClickTrack = async (id: string) => {
  try {
    return await fetch(`${clickTrackUrl}/${id}`, {
      method: RequestMethods.Delete,
    });
  } catch (error) {
    console.log(error);
  }
};

const clickTrackApi = {
  getAllClickTracks,
  createNewClickTrack,
  editClickTrack,
  deleteClickTrack,
};
export default clickTrackApi;
