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
    }
        input {
            border-style:none;
        }
        datalist{
            direction:rtl;
            option{
                
                
            }
        }
           
        }
    }
    
}
`
export default Style