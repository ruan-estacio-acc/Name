import { ColorBarContainer } from './ColorBar.styles'
import check from './assets/check.svg'
import circle314F4A from './assets/circle-314F4A.svg'
import circle31344F from './assets/circle-31344F.svg'

export const ColorBar = () => {
	return (
		<ColorBarContainer>
			<div>
				<img src={circle314F4A} alt="color A" />
			</div>
			<div>
				<img src={circle31344F} alt="color B" />
			</div>
			<div>
				<img src={check} alt="check" />
			</div>
		</ColorBarContainer>
	)
}

