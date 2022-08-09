import { useState } from 'react';

export default function useHandleInput() {
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
  const [stayImages, setStayImages] = useState({ stay_images: '' });
  const [roomImages, setRoomImages] = useState({ room_images: '' });
  const [roomImagesList, setRoomImagesList] = useState([]);

  const handleInput = e => {
    const { name, value } = e.target;
    const isInfoOfStay = Object.keys(stayInfo).includes(name);

    isInfoOfStay
      ? setStayInfo({ ...stayInfo, [name]: value })
      : setRoomInfo({ ...roomInfo, [name]: value });
  };

  const handleInputFile = e => {
    const { name } = e.target;
    const isInfoOfStay = Object.keys(stayInfo).includes(name);
    const formData = new FormData();

    formData.append('uploadFile', e.target.files);
    isInfoOfStay
      ? setStayImages({ [name]: formData })
      : setRoomImages({ [name]: formData });
  };

  const deleteCheckValue = (targetInfo, inputName, checkedValue) => {
    const newValues = targetInfo[inputName].filter(ele => {
      return ele !== checkedValue;
    });

    targetInfo[inputName] = newValues;
  };

  const addOrDeleteCheckValue = (targetInfo, inputName, checkedValue) => {
    const isExisted = targetInfo[inputName].includes(checkedValue);

    isExisted
      ? deleteCheckValue(targetInfo, inputName, checkedValue)
      : targetInfo[inputName].push(checkedValue);
  };

  const handleCheckbox = e => {
    const { name, value } = e.target;
    const isInfoOfStay = Object.keys(stayInfo).includes(name);

    if (isInfoOfStay) {
      addOrDeleteCheckValue(stayInfo, name, value);
    } else {
      addOrDeleteCheckValue(roomInfo, name, value);
    }
  };

  const addRoominList = e => {
    setRoomList([...roomList, roomInfo]);
    stayInfo.rooms.push(roomInfo);
    setRoomImagesList([...roomImagesList, roomImages]);
  };

  return {
    handleInput,
    handleInputFile,
    handleCheckbox,
    initializeRoomInfo,
    addRoominList,
    stayInfo,
    setRoomInfo,
    roomInfo,
    roomList,
    setRoomList,
    roomImages,
    stayImages,
    roomImagesList,
  };
}
