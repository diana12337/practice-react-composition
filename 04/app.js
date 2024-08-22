import React from 'react';
import { createRoot } from 'react-dom/client';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    passData = (passedData) => {
   
        this.setState(({
            filesList: [...this.state.filesList, passedData]

        }))
    }

    render() {
        return (
            <section>
                <File  passData={this.passData} />
                <List files = {this.state.filesList}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
