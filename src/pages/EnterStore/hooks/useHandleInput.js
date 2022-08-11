import { useEffect, useState } from 'react';

export default function useHandleInput() {
  const [stayData, setStayData] = useState('');
  const [roomData, setRoomData] = useState('');
  const [roomDataList, setRoomDataList] = useState('');

  useEffect(() => {
    const stayForm = new FormData();
    const roomForm = new FormData();
    const roomListFrom = new FormData();

    setStayData(stayForm);
    setRoomData(roomForm);
    setRoomDataList(roomListFrom);
  }, []);

  const [roomInfo, setRoomInfo] = useState({
    room_name: '',
    bed: '',
    min_capacity: '',
    max_capacity: '',
    checkin: '',
    checkout: '',
    area: '',
    week_price: '',
    weekend_price: '',
    peek_price: '',
    room_type: '',
    feature: [],
    amenity: [],
    add_on: [],
    room_images: '',
  });
  const [stayInfo, setStayInfo] = useState({
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
    themes: [],
    rooms: [],
    stay_images: '',
  });
  const initializeRoomInfo = () => {
    setRoomInfo({
      room_name: '',
      bed: '',
      min_capacity: '',
      max_capacity: '',
      checkin: '',
      checkout: '',
      area: '',
      week_price: '',
      weekend_price: '',
      peek_price: '',
      room_type: '',
      feature: [],
      amenity: [],
      add_on: [],
      room_images: '',
    });
  };
  const [roomList, setRoomList] = useState([]);

  const handleInput = e => {
    const { name, value } = e.target;
    const isInfoOfRoom = Object.keys(roomInfo).includes(name);
    if (!isInfoOfRoom) {
      stayData.set(name, value);
    } else {
      setRoomInfo({ ...roomInfo, [name]: value });
    }
  };

  const handleInputFile = e => {
    const { name } = e.target;
    const isInfoOfRoom = Object.keys(roomInfo).includes(name);
    const formData = new FormData();
    // formData.append('stay_images', e.target.files[0]);

    if (!isInfoOfRoom) {
      for (let i = 0; i < e.target.files.length; i++) {
        stayData.append(`${name}`, e.target.files);
      }
    } else {
      setRoomInfo({ ...roomInfo, [name]: formData });
    }
  };

  const deleteCheckValue = (targetInfo, inputName, checkedValue) => {
    const newValues = targetInfo[inputName].filter(ele => {
      return ele !== checkedValue;
    });

    targetInfo[inputName] = newValues;
  };

  const checkIfItExist = (targetInfo, inputName, checkedValue) => {
    const isExisted = targetInfo[inputName].includes(checkedValue);

    isExisted
      ? deleteCheckValue(targetInfo, inputName, checkedValue)
      : targetInfo[inputName].push(checkedValue);
  };

  const handleCheckbox = e => {
    const { name, value } = e.target;
    const isInfoOfRoom = Object.keys(roomInfo).includes(name);

    if (!isInfoOfRoom) {
      checkIfItExist(stayInfo, name, value);
      stayData.set(name, stayInfo[name]);
    } else {
      checkIfItExist(roomInfo, name, value);
    }
  };

  const addRoomInList = e => {
    setRoomList([...roomList, roomInfo]);
    addRoomData();
  };

  const addRoomData = () => {
    ROOM_DATA.forEach(room => {
      roomData.append(room.name, roomInfo[room.name]);
    });
    roomDataList.append(roomInfo.room_name, roomData);

    stayData.append('rooms', roomData);
  };

  return {
    handleInput,
    handleInputFile,
    handleCheckbox,
    initializeRoomInfo,
    addRoomInList,
    stayInfo,
    setRoomInfo,
    roomInfo,
    roomList,
    setRoomList,
    stayData,
    roomData,
    roomDataList,
  };
}

const ROOM_DATA = [
  { id: 1, name: 'room_name' },
  { id: 2, name: 'bed' },
  { id: 3, name: 'min_capacity' },
  { id: 4, name: 'max_capacity' },
  { id: 5, name: 'checkin' },
  { id: 6, name: 'checkout' },
  { id: 7, name: 'area' },
  { id: 8, name: 'week_price' },
  { id: 9, name: 'weekend_price' },
  { id: 10, name: 'peek_price' },
  { id: 11, name: 'room_type' },
  { id: 12, name: 'feature' },
  { id: 13, name: 'amenity' },
  { id: 14, name: 'add_on' },
  { id: 15, name: 'room_images' },
];
