import { Link } from "react-router-dom";

import styled, { css } from "styled-components";

import { Wrapper } from "../../styles";
import { sizeLg, sizeMobile } from "../../utils";

export const HomeContainer = styled(Wrapper)`
  min-height: calc(100vh - 60px);
  ${sizeLg(css`
    flex-direction: column;
  `)};
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 0;
  gap: 16px;
  border-bottom: 1px solid #f0f0f0;
  padding-left: 16px;
  ${sizeMobile(css`
    padding-left: 0px;
  `)};
`;

export const Index = styled.span`
  margin-right: 8px;
`;

export const AppIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #f5f5f5;
  object-fit: cover;
`;

export const Info = styled.div`
  min-width: 450px;

  ${sizeMobile(css`
    min-width: auto;
  `)};
`;

export const TitleProductRow = styled.div`
  font-weight: 600;
  font-size: 17px;
  color: #232629;
  margin-bottom: 2px;
`;

export const Description = styled.div`
  color: rgb(14, 13, 13);
  font-size: 15px;
  margin-bottom: 6px;
`;

export const Tags = styled.div`
  font-size: 13px;
  color: #6f6f6f;
  margin-top: 2px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  &:not(:last-child)::after {
    content: "·";
    margin: 0 6px;
    color: #b0b0b0;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StatBox = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border: 1.5px solid #e6e6e6;
  border-radius: 10px;
  padding: 0 14px;
  height: 38px;
  font-size: 16px;
  color: #232629;
  gap: 6px;
`;

export const ProductRowContent = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  ${sizeMobile(css`
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  `)}
`;

// productlisting

export const ProductListingSectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin: 16px 0 16px 0;
  color: #232629;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const BoxListing = styled.div`
  padding: 0px 16px;
  background: #fff;
  margin-bottom: 12px;
`;
