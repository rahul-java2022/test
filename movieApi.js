import React from "react";
import { ActionTypes } from "../redux/constants/ActionTypes";
import axios from "axios";
import { useSelector } from "react-redux";
export const fetchAllMovies = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:3000/api/v1/user/movie");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const getMovieById = async (id) => {
    try {
        const response = await axios.get("http://127.0.0.1:3000/api/v1/user/movie/findMovieById/" + id);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const updateSeats = async (id,availableSeats,numberOfSeats) => {
    try {
        console.log(id, availableSeats, numberOfSeats);
        if(availableSeats && numberOfSeats && availableSeats>numberOfSeats){

            const updatedSeats = parseInt(availableSeats) - parseInt(numberOfSeats) 
            const seats = {numberOfSeats:updatedSeats}
            console.log(seats);
            const response = await axios.post("http://127.0.0.1:3000/api/v1/movies/updateSeats/" + id,seats);
            console.log(response.data);
            return response.data;
        }
    } catch (error) {
        console.log(error);
    }
};
export const AddNewMovie = async(mName, genre, price, pic, date, time, audi, numberOfSeats) => {
    try {
            const movieData = {mName, genre, price, pic, date, time, audi, numberOfSeats}
            const response = await axios.post("http://127.0.0.1:3000/api/v1/movies/addNewMovie",movieData);
            console.log(response.data);
            return response.data;
        } catch (error) {
        console.log(error);
    }
};
export const UpdateMovie = async(id, mName, genre, price, pic, date, time, audi, numberOfSeats) => {
    try {
        console.log(id, mName, genre, price);
            const movieData = { mName, genre, price, pic, date, time, audi, numberOfSeats}
            const response = await axios.patch("http://127.0.0.1:3000/api/v1/movies/editMovie/"+id,movieData);
            console.log(response.data);
            return response.data;
        } catch (error) {
        console.log(error);
    }
}
export const test  = () => {
    return true;
} 
