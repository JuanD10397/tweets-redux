const initialProps = {
    tweets: []
};

export default function(state = initialProps, action) {
    switch (action.type){
        case "ADD_TWEET":
            return {
                ...state,
                tweets: [...state.tweets, action.payload]
            };
        case "DELETE_TWEET":
            return{
                ...state,
                // Hago un filter, cuando el id del tweet sea diferente que el payload (el que quiero borrar)
                //entonces lo guardo. Si el id es igual, entonces No lo guardo (se borrará)
                tweets: state.tweets.filter(tweet => tweet.id !== action.payload)
            };
        default: 
            return state;
    }
}