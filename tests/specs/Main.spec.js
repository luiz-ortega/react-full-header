import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme);

describe('<FullHeader />', () => {
    it('should have header when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });


        it('should have h1 tag h1 with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('should have h2 tag when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Course" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });

        it('should not have h2 tag when subtitle is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });

        it('should have h2 tag with title passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Course" />);
            expect(wrapper.find('h2').props().children).to.be.equal('Course');
        });
    });

    context('bgColor', () => {
        it('should have background-color equal #ccc when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.props().style.backgroundColor).to.be.equal('#ccc');
        });

        it('should have background-color equal #000 when bgColor is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#000" />);
            expect(wrapper.props().style.backgroundColor).to.be.equal('#000');
        });
    });

    context('textColor', () => {
        it('should have color equal #fff when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.props().style.color).to.be.equal('#fff');
        });

        it('should have color equal #ff00 when textColor is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" textColor="#ff00" />);
            expect(wrapper.props().style.color).to.be.equal('#ff00');
        });
    });


    context('font', () => {
        it('should have font equal sans-serif when none is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.props().style.fontFamily).to.be.equal('sans-serif');
        });

        it('should have font equal open-sans when is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" font="open-sans" />);
            expect(wrapper.props().style.fontFamily).to.be.equal('open-sans');
        });
    });
});
