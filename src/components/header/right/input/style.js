import styled from "styled-components";
const Style = styled.div`
ul{
    display: flex;
    direction: rtl;
    gap:10px;
    input{
        width:65px;
        height:25px
    }
    .setting{
        margin-left:30px;
    }
    .makeInput{
        position: relative;
        .show{
            opacity: 0;
            &.see{
                opacity: 1;
            }
        }
        
        .search{
            position: absolute;
            right:0;
            top:0;  
        }
        ul{
            display:flex;
            flex-wrap:wrap;
            overflow-y: auto;
            overflow-x:hidden;
            max-height:150px;
            width:150px;
            position:absolute;
            background-color:#fff;
            padding: 5px 10px;
            box-shadow: 0 0 20px rgba(34, 36, 38, 15%);
                    &::-webkit-scrollbar{
                        width:10px;
                    }
                    &::-webkit-scrollbar-track{
                        background:#ebebed;
                    }
                    &::-webkit-scrollbar-thumb{
                        background:#acb2b2;
                        border-radius:15px;
                    }
            li{
                padding: 10px 0 2px 0;
                
                a{
                    color:black;
                    text-decoration:none;
                }
            }
    }
        input {
            border-style:none;
        }
        
           
        }
    }
    
}
`
export default Style