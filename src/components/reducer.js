export const initialState = {
    user: null,
    playlists: [],
    playing:false,
    item: null,
    //REMOVE AFTER DEVELOPMENT
    //token: 'BQCJVm4botHoN9rl0_ZQU-gLCN68d7AW7krBmjSKlk0YJlAz_CgC3n0Pn2-sTWn8bVvtm-hDQZ40Qpv2GTVxgBc6a2UHQDYcrgHqGv9p-Jgt0JaEcC24xubXPIm3AlHTU-Hvq9mauUGYk0zRGU8R10sGT3U-CGorvwCPPSFC0W_8XZdZYooN',
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
             ...state,
             playlists: action.playlists,   
            };
        case "SET_DISCOVERY_WEEKLY":
            return {
                ...state,
                discovery_weekly:action.discovery_weekly,
            }
        default:
            return state;
    }
}

export default reducer;