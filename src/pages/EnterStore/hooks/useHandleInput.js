import { useState } from 'react';

export default function useHandleInput() {
  const [roomInfo, setRoomInfo] = useState({
    room_name: '',
    bed: '',
    content: '',
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
    stay_images: '',
  });
  const initializeRoomInfo = () => {
    setRoomInfo({
      room_name: '',
      bed: '',
      content: '',
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
  const [roomDataList, setRoomDataList] = useState([]);

  const handleInput = e => {
    const { name, value } = e.target;
    const isInfoOfStay = Object.keys(stayInfo).indexOf(name);

    isInfoOfStay >= 0
      ? setStayInfo({ ...stayInfo, [name]: value })
      : setRoomInfo({ ...roomInfo, [name]: value });
  };

  const handleInputFile = e => {
    const { name, files } = e.target;
    const isInfoOfStay = Object.keys(stayInfo).includes(name);
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }

    if (isInfoOfStay) {
      setStayInfo({ ...stayInfo, [name]: formData.getAll('images') });
    } else {
      setRoomInfo({ ...roomInfo, [name]: formData.getAll('images') });
    }
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

  const addRoominList = () => {
    addInfoToFormData(roomInfo);
  };

  const addInfoToFormData = target => {
    const formData = new FormData();
    const InfoKeys = Object.keys(target);
    const InfoValues = Object.values(target);
    const InfoLength = Object.keys(target).length;

    for (let i = 0; i < InfoLength; i++) {
      if (InfoKeys[i] === 'stay_images' || InfoKeys[i] === 'room_images') {
        for (let j = 0; j < InfoValues[i].length; j++) {
          formData.append(InfoKeys[i], InfoValues[i][j]);
        }
        break;
      }
      formData.append(InfoKeys[i], InfoValues[i]);
    }
    if (target === roomInfo) {
      formData.append('stay_name', stayInfo.stay_name);
      setRoomDataList([...roomDataList, { [roomInfo.room_name]: formData }]);
    }

    return formData;
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
    addInfoToFormData,
    roomDataList,
    setRoomDataList,
  };
}
