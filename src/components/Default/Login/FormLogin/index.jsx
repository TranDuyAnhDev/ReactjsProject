import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
//
import { useForm } from 'react-hook-form';
import useStyles from './styles';

export default function FormLogin(props) {
    const { handleSubmit, control } = useForm();
    const { onSubmitSave, isLoad, ...otherProps } = props;
    const onSubmit = (data) => {
        onSubmitSave(data);
    };

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Box className={classes.computerBox}>

                <Box className={classes.formLogin} >
                    <Box className={classes.titleLogin} >
                        Đăng nhập
                    </Box>
                    <form onSubmit={handleSubmit(onSubmit)} className={classes.formInput}>
                        <CustomInput
                            label='Mật khẩu'
                            name="password"
                            type='password'
                            id="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src={Password} className={classes.iconLogin} />
                                    </InputAdornment>
                                ),
                            }}
                            control={control}
                        />
                        <Button
                            type="submit"
                            disabled={isLoad === true}
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                        >
                            <Box className={classes.labelLogin}>
                                Đăng nhập
                            </Box>
                            {isLoad && <CircularProgress
                                size={16}
                                color={'white'}
                                style={{
                                    marginLeft: 8,
                                    opacity: isLoad === true ? 1 : 0,
                                    transition: 'all .3s ease',
                                }}
                            />}
                        </Button>
                    </form>
                </Box>
            </Box>
        </div>
    );

}
