import styled from "styled-components"
const Style = styled.div`

    ul.detail{
        display:flex;
        justify-content: space-between;
        color:#fff;
        margin-top:40px;
        margin-bottom:50px;
            .rank{
                text-align: center;
                background-color:rgb(24, 198, 131);
                padding:15px;
                border-bottom-left-radius: 15px;
                border-bottom-right-radius: 15px;
                position: relative;
                .top{
                    content:"" ; 
                    background-color:rgb(24, 198, 131);
                    top:0;
                    width:75px;
                    position: absolute;
                    height:10px;
                    left:-10px;
                    border-radius:5px;
                }
                span{
                    font-size:30px;
                    font-weight:bold;
                    
                }
                p{
                    font-size:10px;
                    margin-bottom:0;
                }
            }
            .id{
                margin-left:-90px;
                span{
                    font-size:26px;
                    font-weight:bold;
                }
                .percentage{
                    font-size:20px;
                    svg{
                        margin-left:10px;
                    }
                }
            }
            .numeric{
                span{
                    font-size:15px;
                    font-weight:lighter;
                }
                p{
                    margin:0;
                    font-size:20px;
                }
                button{
                    border-radius: 20px;
                    color: #fff;
                    background-color: rgb(24, 198, 131);
                    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 15px -3px;
                    border-style:none;
                    padding:10px 20px;
                    margin-top:25px;
                    font-size:15px;
                    font-weight:bold;
                    transition:all 0.2s;
                    &:hover{
                        transform:translateY(-1px);
                    }
                }
                
            }
    }
    .background{
        
        padding-bottom:50px;
        background-color:#fff;
    .flex{
        display:flex;
        justify-content: center;
    }
    }

`
export default Style