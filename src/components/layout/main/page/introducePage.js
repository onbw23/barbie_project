import { CUSManagerCard } from 'components/CUScomponent'
import React, {forwardRef} from 'react'

const IntroducePage = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='introduce-page'>
            <CUSManagerCard
                name="황규남"
                title="대표"
                description="자기 소개나 추가 정보를 여기에 입력하세요."
                imageUrl={'hwang.png'}
                />
        </div>
    )
})

export default IntroducePage