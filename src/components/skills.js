import React from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap';
import { FaReact, FaPython, FaJava } from 'react-icons/fa'
import {
	SiJavascript,
	SiTypescript,
	SiRedux,
	SiReduxsaga,
	SiJest,
	SiFirebase,
	SiTensorflow,
} from 'react-icons/si';
import { DiMongodb } from 'react-icons/di'

import '../styles/index.scss';
import * as styles from './skills.module.scss';

const ICON_SIZE = 100;

const Skills = () => {

	return (
		<div>
			<h1>Skills</h1>
			<Card className={styles.container}>
				<CardTitle className={styles.cardTitle}>Frontend Frameworks</CardTitle>
				<CardBody className={styles.cardBody}>
					<FaReact size={ICON_SIZE} className={styles.icon} />
					<SiRedux size={ICON_SIZE} className={styles.icon} />
					<SiReduxsaga size={ICON_SIZE} className={styles.icon} />
				</CardBody>
			</Card>
			<Card className={styles.container}>
				<CardTitle className={styles.cardTitle}>Programming languages</CardTitle>
				<CardBody className={styles.cardBody}>
					<SiJavascript size={ICON_SIZE} className={styles.icon} />
					<SiTypescript size={ICON_SIZE} className={styles.icon} />
					<FaPython size={ICON_SIZE} className={styles.icon} />
					<FaJava size={ICON_SIZE} className={styles.icon} />
				</CardBody>
			</Card>
			<Card className={styles.container}>
				<CardTitle className={styles.cardTitle}>Backend / Web Services</CardTitle>
				<CardBody className={styles.cardBody}>
					<SiFirebase size={ICON_SIZE} className={styles.icon} />
				</CardBody>
			</Card>
			<Card className={styles.container}>
				<CardTitle className={styles.cardTitle}>Database</CardTitle>
				<CardBody className={styles.cardBody}>
					<DiMongodb size={ICON_SIZE} className={styles.icon} />
				</CardBody>
			</Card>
			<Card className={styles.container}>
				<CardTitle className={styles.cardTitle}>Data Science / ML</CardTitle>
				<CardBody className={styles.cardBody}>
					<SiTensorflow size={ICON_SIZE} className={styles.icon} />
				</CardBody>
			</Card>
			<Card className={styles.container}>
				<CardTitle className={styles.cardTitle}>Unit test</CardTitle>
				<CardBody className={styles.cardBody}>
					<SiJest size={ICON_SIZE} className={styles.icon} />
				</CardBody>
			</Card>
		</div>
	);
}

export default Skills

