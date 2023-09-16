import React from 'react';
function intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Lucas De Biasio</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Computer Engineering Student</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I'm a third year computer engineering student at Simon Fraser University. Currently I am exploring various corners of the computer science world from data engineering to front end web development.
            <br/>
            This webpage will serve as an interactive resume, where I can display and link my personal projects as well as share a little bit more about myself.</p>
        </div>
    )
}

export default intro;