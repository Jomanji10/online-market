import React, { useEffect, useState } from 'react'
import Auth from './Auth'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJwt } from '../../store/authSlice'


const AuthContainer = () => {
    const dispatch = useDispatch()
    let username = useSelector(state => state.auth.username)

    debugger

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: values => {
            debugger
            dispatch(fetchJwt(values))
        }
    })

    return <Auth formik={formik} username={username} />
}


export default AuthContainer