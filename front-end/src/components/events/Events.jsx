import React from "react";
import Event from './event/Event'

export default function Events(){
    return(
        <>
            <button type="button">
                View Pending Events
            </button>
            <div>
                <Event/>
                <Event/>
                <Event/>
            </div>
        </>
    );
}