import React, {useEffect} from 'react'
import {connect} from 'react-redux'



export const _Journal = () => {


   return <div>Journal</div>

}


const mapStateToProps = (state) => {
    return state
}

export const Journal = connect(mapStateToProps, {})(_Journal);