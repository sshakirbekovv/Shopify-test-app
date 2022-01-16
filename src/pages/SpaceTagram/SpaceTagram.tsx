import React, { useEffect, useState } from "react";
import { getApod } from "../../api/apod.api";
import Card from "../../components/Card/Card";
import { Apod } from "../../types/apod.types";
import { DateRangePicker } from 'react-date-range';
import { SpaceTagramCalendar, SpaceTagramMain, SpaceTagramMainTitle } from "./SpaceTagram.styles";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { firstday, lastday } from "../../utils/getWeek";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const SpaceTagram: React.FC = () => {

  const navigate = useNavigate();
  const query = useQuery();
  const queryStart = query.get('start_date')!;
  const queryEnd = query.get('end_date')!;

  const [start, setStart] = useState<string>(queryStart || firstday);
  const [end, setEnd] = useState<string>(queryEnd || lastday);
  const [apod, setApod] = useState<Apod[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState(false);
  const showHideClassName = openModal ? 'display-block' : 'display-none';
  const [changeDate, setChangeDate] = useState({
    selectionRange: {
      startDate: new Date(firstday),
      endDate: new Date(lastday),
      key: 'selection',
    },
  });

  const modalActive = () => {
    !openModal ? setOpenModal(true) : setOpenModal(false);
  };

  useEffect(() => {
    setLoading(true);
    getApod(queryStart, queryEnd)
      .then((res) => {
        setApod(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [queryStart, queryEnd]);

  useEffect(() => {
    if (start !== firstday && end !== lastday) {
      navigate({
        pathname: `/`,
        search: `start_date=${new Date(start).toISOString().substring(0, 10)}&end_date=${new Date(end).toISOString().substring(0, 10)}`,
      }, { replace: true });
    } else {
      navigate({
        pathname: `/`,
        search: `start_date=${new Date(firstday).toISOString().substring(0, 10)}&end_date=${new Date(lastday).toISOString().substring(0, 10)}`,
      }, { replace: true });
    }
  }, [navigate, start, end]);

  const handleSelect = (ranges: any) => {
    setChangeDate({
      selectionRange: {
        startDate: ranges.selection.startDate,
        endDate: ranges.selection.endDate,
        key: 'selection',
      },
    });
    setStart(ranges.selection.startDate);
    setEnd(ranges.selection.endDate);
  };

  return (
    <>
      <SpaceTagramMainTitle>Welcome to Spacetagram!</SpaceTagramMainTitle>
      <SpaceTagramCalendar onClick={modalActive}>
      <SpaceTagramMainTitle>Click below to open the calendar</SpaceTagramMainTitle>
        <FontAwesomeIcon icon={faChevronCircleDown} color="#1c374d" style={{fontSize: '2rem'}}/>
      </SpaceTagramCalendar>
      <div className={showHideClassName}>
        <DateRangePicker 
          ranges={[changeDate.selectionRange]} 
          onChange={handleSelect} 
          rangeColors={['#1c374d']} 
        />
        </div>
      {!loading ? (
        <>
          {
            apod.length !== 0 ? (
              <SpaceTagramMain>
              {apod.map((item: Apod, i: any) => {
                return (
                  <Card
                    key={i}
                    title={item.title}
                    url={item.url}
                    date={item.date}
                    explanation={item.description}
                    media_type={item.media_type}
                  />
                );
              })}
            </SpaceTagramMain>
            ) : (
              <p style={{textAlign: 'center', fontSize: '2rem', paddingTop: '2rem'}}>
                There is no data on these dates :(
              </p>
            )
          }
        </>
      ) : ( 
        <SpaceTagramMain>
          <Skeleton height={250}/>
          <Skeleton height={250}/>
          <Skeleton />
          <Skeleton />
          <Skeleton count={5} /> 
          <Skeleton count={5} /> 
          <Skeleton height={250}/>
          <Skeleton height={250}/>
          <Skeleton />
          <Skeleton />
          <Skeleton count={5} /> 
          <Skeleton count={5} /> 
        </SpaceTagramMain>
      )}
    </>
  );
};

export default SpaceTagram;
