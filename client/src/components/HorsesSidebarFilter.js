function HorsesSidebarFilter({
    filterSettings, setFilterSettings
}) {
    return (
        <div className='side-bar'>
            <h3>PROGRAM</h3>

            <input type="checkbox" id="lease" name="lease" value="lease"
                checked={filterSettings.program.lease}
                onChange={(e) => setFilterSettings({
                    ...filterSettings,
                    program: {
                        ...filterSettings.program,
                        lease: !filterSettings.program.lease
                    }
                })}
            />
            <label for="lease">Lease</label><br />

            <input type="checkbox" id="lesson" name="lesson" value="lesson"
                checked={filterSettings.program.lesson}
                onChange={(e) => setFilterSettings({
                    ...filterSettings,
                    program: {
                        ...filterSettings.program,
                        lesson: !filterSettings.program.lesson
                    }
                })}
            />
            <label for="lesson">Lesson</label><br />

            <input type="checkbox" id="prospect" name="prospect" value="prospect"
                checked={filterSettings.program.prospect}
                onChange={(e) => setFilterSettings({
                    ...filterSettings,
                    program: {
                        ...filterSettings.program,
                        prospect: !filterSettings.program.prospect
                    }
                })}
            />
            <label for="prospect">Prospect</label><br />

            <input type="checkbox" id="boardAndTrain" name="boardAndTrain" value="boardAndTrain"
            
                checked={filterSettings.program.boardAndTrain}
                onChange={(e) => setFilterSettings({
                    ...filterSettings,
                    program: {
                        ...filterSettings.program,
                        boardAndTrain: !filterSettings.program.boardAndTrain
                    }
                })}
            />
            <label for="boardAndTrain">Board & Train</label><br />
            {/* <button type="button">Lease</button>
            <button type="button">Lesson</button>
            <button type="button">Prospect</button>
            <button type="button">Board & Train</button> */}
            {/* <h3>AGE</h3>
            <button type="button">1-10</button>
            <button type="button">11-20</button>
            <button type="button">21-30</button> */}



        </div>
    )
}

export default HorsesSidebarFilter