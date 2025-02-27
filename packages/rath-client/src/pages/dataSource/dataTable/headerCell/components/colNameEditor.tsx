// Copyright (C) 2023 observedobserver
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import { DefaultButton, Modal, PrimaryButton, Stack, TextField } from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';
import React, { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import intl from 'react-intl-universal';
import styled from 'styled-components';

const Container = styled.div`
    padding: 1em;
    > h1 {
        font-size: 1.2em;
    }
`;

interface ColNameEditorProps {
    showNameEditor: boolean;
    setShowNameEditor: React.Dispatch<React.SetStateAction<boolean>>;
    defaultName: string;
    onNameUpdate: (newName: string) => void;
}
const ColNameEditor: React.FC<ColNameEditorProps> = (props) => {
    const { showNameEditor, setShowNameEditor, defaultName, onNameUpdate } = props;
    const nameEditorTitleId = useId('name-editor-title');
    const [headerName, setHeaderName] = useState<string>(defaultName);
    useEffect(() => {
        setHeaderName(defaultName);
    }, [defaultName]);
    return (
        <Modal
            titleAriaId={nameEditorTitleId}
            isOpen={showNameEditor}
            onDismiss={() => {
                setShowNameEditor(false);
            }}
        >
            <Container>
                <h1 id={nameEditorTitleId}>{intl.get('dataSource.table.edit')}</h1>
                <Stack tokens={{ childrenGap: 12 }}>
                    <TextField
                        label={intl.get('dataSource.table.fieldName')}
                        aria-label={intl.get('dataSource.table.fieldName')}
                        value={headerName}
                        placeholder={defaultName}
                        onChange={(e, val) => {
                            setHeaderName(`${val}`);
                        }}
                    />
                    <Stack tokens={{ childrenGap: 12 }} horizontal>
                        <PrimaryButton
                            text={intl.get('function.confirm')}
                            onClick={() => {
                                onNameUpdate && onNameUpdate(headerName);
                                setShowNameEditor(false);
                            }}
                        />
                        <DefaultButton
                            text={intl.get('function.cancel')}
                            onClick={() => {
                                unstable_batchedUpdates(() => {
                                    setShowNameEditor(false);
                                    setHeaderName(defaultName);
                                });
                            }}
                        />
                    </Stack>
                </Stack>
            </Container>
        </Modal>
    );
};

export default ColNameEditor;
