import styled, { css } from "styled-components";
import { sizeLg, sizeMobile } from "../../utils";
import { Wrapper } from "../../styles";
import { images_png } from "../../assets";
import { colors } from "../../constants";

export const SignInContainer = styled.div`
  max-width: 420px;
  margin: 5rem auto;
  margin-top: 0px;
  padding: 2.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background-color: rgb(221, 190, 190);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.875rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  }
`;

export const HomeContainer = styled(Wrapper)`
  ${sizeLg(css`
    flex-direction: column;
  `)};
`;
export const ImagesGrid = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  ${sizeLg(css`
    justify-content: center;
  `)};
`;

export const SvgParent = styled.div`
  ${sizeLg(css`
    display: none;
  `)};
`;
export const ImageGallery = styled.div`
  display: flex;
  height: 520px;
  padding: 20px 0px 20px 50px;
  ${sizeLg(css`
    padding: 0px 20px;
    flex-direction: column;
  `)};
`;
export const GalleryWrapper = styled.div`
  position: absolute;
  z-index: 18;
  top: 35%;
  left: 0;
  right: 0;
  ${sizeLg(css`
    top: 0;
  `)};
`;

export const FlexCol = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  ${sizeLg(css`
    margin-top: 20px;
  `)};
`;
export const ImageTileLg = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  flex: 1;
  margin: 10px;
  border-radius: 8px;

  ${sizeLg(css`
    min-height: 400px;
    background-repeat: no-repeat;
    border-radius: 24px;
    background-size: cover;
    margin: 0px;
  `)};
`;
export const ImageTileSm = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-size: cover;
  flex: 1;
  margin: 10px;
  border-radius: 8px;

  ${sizeLg(css`
    min-height: 300px;
    border-radius: 24px;
  `)};
`;
export const HeroContent = styled.div`
  max-width: 600px;
  padding-top: 40px;
  padding: 0 8px;
  @media (max-width: 992px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 40px;
  }

  ${sizeLg(css`
    padding-left: 5px;
    padding-right: 5px;
    margin-bottom: 0px;
  `)};
`;

export const HeroTitle = styled.h1`
  font-size: 54px;
  line-height: 1.4;
  font-weight: bold;
  color: ${colors.darkBlue};
  margin-bottom: 20px;

  ${sizeMobile(css`
    font-size: 40px;
  `)};

  ${sizeLg(css`
    line-height: 1.6;
  `)};
`;

export const TitleUnderline = styled.span`
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 21px;
    background-image: url(${images_png.lineExploreText});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${colors.textGray};
  margin-bottom: 40px;

  ${sizeMobile(css`
    font-size: 16px;
  `)};
`;
