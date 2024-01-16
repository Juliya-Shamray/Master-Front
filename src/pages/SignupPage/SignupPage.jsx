import { StyledWrap } from 'pages/WelcomePage/WelcomePage.styled';
import {
  StyleError,
  StyledButton,
  StyledDiv,
  StyledForm,
  StyledIcon,
  StyledInput,
  StyledInputDate,
  StyledLi,
  StyledText,
  StyledTitle,
} from './SignupPage.styled';
import { Link, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../../styles/images/icons/calendar.svg';
import PasswordInput from 'components/PasswordInput/PasswordInput';
import { Controller, useForm } from 'react-hook-form';
import { addDays, subDays } from 'date-fns';
import changeFormatDate from 'helpers/changeFormatDate';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { useDateOfBirth } from 'hooks/useDateOfBirth';

const emailRexExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    control,
  } = useForm();

  const { setDateOfBirth } = useDateOfBirth();

  const onSubmit = data => {
    setDateOfBirth(data.birthDay);
    data.birthDay = changeFormatDate(data.birthDay);

    dispatch(registerThunk(data))
      .unwrap()
      .then(() => {
        toast.warning(
          `Check your email, we have sent you a confirmation email!`
        );
        navigate('/signin');
      })
      .catch(() => toast.error('Data is not valid'));
  };

  return (
    <StyledWrap>
      <StyledDiv className="container">
        <StyledTitle>Sign Up</StyledTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <ul>
            <StyledLi>
              <StyledInput
                placeholder="Name"
                {...register('name', {
                  required: { value: true, message: 'Field is empty' },
                  type: 'text',
                })}
                onBlur={() => trigger('name')}
              />
              {errors.name && <StyleError>{errors.name.message}</StyleError>}
            </StyledLi>
            <StyledLi>
              <Controller
                control={control}
                name="birthDay"
                render={({ field }) => (
                  <StyledInputDate
                    placeholderText="dd/mm/yyyy"
                    onChange={date => field.onChange(date)}
                    selected={field.value}
                    dateFormat="dd/MM/yyyy"
                    excludeDateIntervals={[
                      {
                        start: subDays(new Date(), 1),
                        end: addDays(new Date(), 1000),
                      },
                    ]}
                    onBlur={() => {
                      field.onBlur();
                      trigger('birthDay');
                    }}
                  />
                )}
                rules={{
                  required: {
                    value: true,
                    message: 'Field is empty',
                  },
                }}
                onBlur={() => trigger('birthDay')}
              />
              <StyledIcon src={calendarIcon} alt="calendar" />
              {errors.birthDay && (
                <StyleError>{errors.birthDay.message}</StyleError>
              )}
            </StyledLi>

            <StyledLi>
              <StyledInput
                type="email"
                placeholder="Email"
                {...register('email', {
                  pattern: {
                    value: emailRexExp,
                    message: 'Email is not valid',
                  },
                  required: true,
                  type: 'text',
                })}
                onBlur={() => trigger('email')}
              />
              {errors.email && <StyleError>{errors.email.message}</StyleError>}
            </StyledLi>
            <StyledLi>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <PasswordInput
                    placeholder="Password"
                    field={field}
                    trigger={trigger}
                    errors={errors}
                  />
                )}
                rules={{
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long',
                  },
                }}
              />
              {errors.password && (
                <StyleError>{errors.password.message}</StyleError>
              )}
            </StyledLi>

            <StyledButton type="submit">Sign up</StyledButton>
          </ul>
        </StyledForm>
        <StyledText>
          <Link to="/signin">Sign in</Link>
        </StyledText>
      </StyledDiv>
    </StyledWrap>
  );
};

export default SignupPage;
