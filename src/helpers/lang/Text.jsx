import React, { useContext } from 'react'
import { LangContext } from '../../contexts/LangContext'

const Text = ({tid}) => {
    const lang = useContext(LangContext)
    console.log(lang.dictionary[0])
    return lang.dictionary[tid] || tid
}

export default Text
