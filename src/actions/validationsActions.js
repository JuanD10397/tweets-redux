export const validationFormAddTweetAction = state => {
    return {
        // Con el type conectamos esta Action con el Reducer que comparta el mismo type (validationReducer)
        type: "VALIDATION_FORM_ADD_TWEET", 
        payload: state
    };
};