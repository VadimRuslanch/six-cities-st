import {createReducer} from "@reduxjs/toolkit";
import {changeCity, setPlaceCity} from "./action";

const initialState = {
    city: {
        title: '',
        lat: '',
        lng: '',
        zoom: '',
    },
    place: [
        {
            id: 1,
            imgPath: 'img/apartment-01.jpg',
            price: 120,
            name: 'Beautiful &amp; luxurious apartment at great location',
            type: 'Apartment',
            mark: 'Premium',
            lat: 52.3909553943508,
            lng: 4.85309666406198
        },
        {
            id: 2,
            imgPath: 'img/room.jpg',
            price: 80,
            name: 'Wood and stone place',
            type: 'Private room',
            lat: 52.3609553943508,
            lng: 4.85309666406198
        }
    ]
}

const reducer = createReducer(initialState, builder => {
    builder
        .addCase(changeCity, (state, action) => {
            state.city = action.payload;
        })
        .addCase(setPlaceCity, (state, action) => {
            state.city = action.payload;
        })
})

export {reducer};
