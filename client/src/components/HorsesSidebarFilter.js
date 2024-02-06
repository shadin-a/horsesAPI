function HorsesSidebarFilter({
    filterSettings, setFilterSettings
}) {
    return (
        <div className='side-bar'>
            <h3>PROGRAM</h3>
            <div className="side-bar-option">
                <div className="checkbox">
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
                </div>
                <label for="lease">Lease</label><br />
            </div>
            <div className="side-bar-option">
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
            </div>
            <div className="side-bar-option">
                <div className="checkbox">
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
                </div>
                <label for="prospect">Prospect</label><br />
            </div>
            <div className="side-bar-option">
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
            </div>
          

        </div>
    )
}

export default HorsesSidebarFilter