import React, { FC, useEffect, useState } from "react";
import axios from "axios";
import { Button, AutoComplete, notification } from "antd";
import { IData, SearchPanelProps, SetSearchOptionsType } from "../../types";
import "./searchPanel.css";

const SearchPanel: FC<SearchPanelProps> = ({ setItems }) => {
    const [value, setValue] = useState("");
    const [postsData, setPostsData] = useState([]);
    const [options, setOptions] = useState([]);
    const [searchOptions, setSearchOptions] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");

            if (data) {
                const autoCompleteItems = data.map(({ title, id }: IData) => ({ value: title, id }));

                setPostsData(data);
                setOptions(autoCompleteItems);
                setSearchOptions(autoCompleteItems);
                setItems(data);
            }
        }
        fetchPosts();
    }, [])

    const onSelect = (selectedOption: string) => {
        const findItem = postsData.find(({ title }) => title === selectedOption)
        setItems(findItem ? [findItem] : [])
    };

    const onChange = (data: string) => {
        setValue(data);
    };

    const onSearch = (searchText: string) => {
        setSearchOptions(options.filter(({value}: SetSearchOptionsType) => value.includes(searchText)));
        setItems(postsData.filter(({title}: SetSearchOptionsType) => title.includes(searchText)))
    };

    const close = () => {
        setItems(postsData)
    };

    const openNotification = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button
                type="primary"
                size="small"
                onClick={() => {
                    setItems(postsData)
                    notification.close(key)
                }}
            >
                Confirm
            </Button>
        );

        notification.open({
            btn,
            key,
            onClose: close,
            description: value,
            message: "Notification Title",
        });
    };

    return (
        <>
            <AutoComplete
                placeholder="input here"
                options={searchOptions}
                value={value}
                onSelect={onSelect}
                onChange={onChange}
                onSearch={onSearch}
                style={{ width: 200 }}
            />
            <Button
                disabled={!value}
                onClick={() => {
                    openNotification()
                    setValue("")
                }}
            >
                Send
            </Button>
        </>
    );
};

export default SearchPanel;
