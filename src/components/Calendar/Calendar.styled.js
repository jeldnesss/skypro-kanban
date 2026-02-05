import styled, { css } from "styled-components";

export const Calendar = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarPopNewCard = styled(Calendar)`
  width: 182px;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
`;

export const CalendarSubtitle = styled(CalendarTitle)`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;
export const CalendarBlock = styled.div`
  display: block;
  width: 182px;
`;
export const CalendarNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const CalendarActions = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CalendarAction = styled.nav`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarSvg = styled.svg`
  fill: #94a6be;
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;
export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;
export const DayName = styled.div`
  color: ${({ weekend }) => (weekend ? "#E5533D" : "#94A6BE")};
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  ${({ other }) =>
    other &&
    css`
      color: #94a6be;
    `}
  ${({ weekend }) =>
    weekend &&
    css`
      color: #e5533d;
    `}

  ${({ current }) =>
    current &&
    css`
      background-color: #565eef;
      color: #fff;
    `}
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarPeriodText = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
`;
