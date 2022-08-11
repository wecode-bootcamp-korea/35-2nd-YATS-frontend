import { useEffect, useState } from 'react';

export default function useHandleInput() {
  const [roomList, setRoomList] = useState([]);
  const [stayData, setStayData] = useState('');
  const [roomData, setRoomData] = useState('');
  const [roomDataList, setRoomDataList] = useState({});
  const [checkboxValues] = useState({
    themes: [],
    feature: [],
    amenity: [],
    add_on: [],
  });
  const stayInfo = {
    stay_name: '',
    address: '',
    latitude: '',
    longitude: '',
    email: '',
    phone: '',
    keyword: '',
    summary: '',
    content_top: '',
    content_bottom: '',
    types: '',
    stay_images: '',
  };

  useEffect(() => {
    const stayForm = new FormData();
    const roomForm = new FormData();

    setStayData(stayForm);
    setRoomData(roomForm);
  }, []);

  const handleInput = e => {
    const { name, value } = e.target;
    const isInfoOfStay = Object.keys(stayInfo).includes(name);

    if (isInfoOfStay) {
      stayData.set(name, value);
    } else {
      roomData.set(name, value);
      console.log(name, value);
    }
  };

  const handleInputFile = e => {
    const { name } = e.target;
    const isInfoOfStay = Object.keys(stayInfo).includes(name);

    if (isInfoOfStay) {
      for (let i = 0; i < e.target.files.length; i++) {
        stayData.append(`${name}`, e.target.files[i]);
      }
    } else {
      for (let i = 0; i < e.target.files.length; i++) {
        roomData.append(`${name}`, e.target.files[i]);
      }
    }
  };

  const handleCheckbox = e => {
    const { name, value } = e.target;

    checkIfItExist(name, value);
    stayData.set(name, checkboxValues[name]);
  };

  const checkIfItExist = (inputName, checkedValue) => {
    const isExisted = checkboxValues[inputName].includes(checkedValue);

    isExisted
      ? deleteCheckValue(inputName, checkedValue)
      : checkboxValues[inputName].push(checkedValue);
  };

  const deleteCheckValue = (inputName, checkedValue) => {
    const newValues = checkboxValues[inputName].filter(ele => {
      return ele !== checkedValue;
    });

    checkboxValues[inputName] = newValues;
  };

  const addRoomInList = e => {
    setRoomList([...roomList, { room_name: roomData.get('room_name') }]);
    addRoomData();
  };

  const addRoomData = () => {
    const roomName = roomData.get('room_name');

    roomData.append('stay_name', stayData.get('stay_name'));
    setRoomDataList({ ...roomDataList, [roomName]: roomData });
  };

  return {
    handleInput,
    handleInputFile,
    handleCheckbox,
    addRoomInList,
    roomList,
    setRoomList,
    stayData,
    roomData,
    roomDataList,
    setRoomDataList,
  };
}
