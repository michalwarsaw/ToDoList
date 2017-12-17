import React from 'react';

export default class TodosListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Zadanie</th>
                    <th>Zmień</th>
                </tr>
            </thead>
        );
    }
}