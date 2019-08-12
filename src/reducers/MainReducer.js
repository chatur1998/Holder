import { IMAGE_CLICKED,
         NEW_IMAGE_CLICKED,
         NAME_CHANGED,
         RENDER_LIST,
         IMAGE_MOUNTED,
         URI_GENERATED,
         IMAGE_SELECTED } from '../actions/types';

const INITIAL_STATE = {
  url: '', 
  uri: '',
  name: '',
  folders: [],
  images: [],
  imagesURL: []
};

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMAGE_CLICKED:
      return { ...state, uri: action.payload };
    case NEW_IMAGE_CLICKED:
      return { ...state, url: action.payload };
    case NAME_CHANGED:
     return { ...state, NewName: action.payload, name: action.naam };
    case RENDER_LIST:
      return { ...state, folders: action.payload };
    case IMAGE_MOUNTED:
      return { ...state, images: action.payload };
    case URI_GENERATED:
      return { ...state, imagesURL: action.uri };
    // case IMAGE_SELECTED:
    //   return { ...state, url: action.payload };
    default:
      return state;
  }
};
