import React from 'react'

const Journal = () => {

    return (
        // import NoteContext from '../Context/notes/NoteContext'

        <>
            <div style={{ display: "flex" }}>
                <div className="ptr" style={{ display: "inline-block", width: "500px" }}>
                <h4 className="pnts" > Want to write but don't know how? No worries, follow these points!</h4> <br />
                    <ul>
                        <li><p className="pnts" > Talk About Your Day</p></li>
                        <li><p className="pnts"> Identify Things You’re Grateful For</p></li>
                        <li><p className="pnts"> Write a List of Your Coping Mechanisms</p></li>
                        <li><p className="pnts"> Describe a Goal</p></li>
                        <li><p className="pnts"> Write About How Different You Were 5 Years Ago</p></li>
                        <li><p className="pnts"> Write a Letter to Your Body</p></li>
                        <li><p className="pnts"> List and Describe Your Emotions</p></li>
                        <li><p className="pnts"> Write About How You’d Describe Yourself to a Stranger</p></li>
                        <li><p className="pnts"> Describe the Best Compliment You’ve Ever Gotten</p></li>
                        <li><p className="pnts"> Write a Message for Yourself on Bad Days</p></li>
                    </ul>
                </div>
                <div className="jrn" style={{ width: '500px', display: "inline-block" }}>
                    <form>

                        <div className="mb-3">
                            <label htmlFor="description" name="description" className="form-label" ><h4>Your Today's Journal</h4></label>
                            <input type="text" name="description" className="form-control" id="description" style={{ height: '500px' }}
                                required minLength={5} />
                        </div>


                        <button type="submit" className="btn btn-primary" >Add Journal</button>
                    </form>

                </div>
            </div>
        </>




    )
}
export default Journal;