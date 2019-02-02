import java.util.AbstractList;
import java.util.List;
import java.util.*;

/**
 * A triple-ended queue implementation of the List interface that allows for fast modifications and the front, back and middle
 * utilizes two EArrayDeques (class made by myself, included in this comp2402a2 package)
 * size(), get(i) and set(i,x) all run in O(1) amoritized time
 * add(i,x) and remove(i) both run in O(1 + min{i, size()-i, |size()/2 -i|}) amoritized time
 *
 * @param <T> the type of objects stored in the treque
 */
public class Treque<T> extends AbstractList<T> {
	/**
	 * You decide on the instance variables you need.
	 */
	EArrayDeque<T> e1;
	EArrayDeque<T> e2;

	public Treque(Class<T> t) {
		e1 = new EArrayDeque<T>(t);
		e2 = new EArrayDeque<T>(t);
	}

	public T get(int i) {
		if (i < 0 || i > size() - 1) throw new IndexOutOfBoundsException();
		if(i<e1.size()){
			return e1.get(i);
		}else{
			return e2.get(i-e1.size());
		}
	}

	public T set(int i, T x) {
		if (i < 0 || i > size() - 1) throw new IndexOutOfBoundsException();
		if(i<e1.size()){
			return e1.set(i,x);
		}else{
			return e2.set(i-e1.size(), x);
		}
	}

	public void add(int i, T x) {
		if (i < 0 || i > size()) throw new IndexOutOfBoundsException();
		if(i<e1.size()){
			e1.add(i,x);
		}else{
			e2.add(i-e1.size(), x);
		}
		reSize();
	}

	public T remove(int i) {
		if (i < 0 || i > size()-1) throw new IndexOutOfBoundsException();
		T t;
		if(i<e1.size()){
			t = e1.remove(i);
		}else{
			t = e2.remove(i-e1.size());
		}
		reSize();
		return t;
	}

	public int size() {
		return e1.size() + e2.size();
	}

	public void reSize(){
		if(e1.size() == e2.size()+2){
			e2.add(0, e1.remove(e1.size()-1));
		}else if(e2.size() == e1.size() + 2){
			e1.add(e1.size(), e2.remove(0));
		}
	}

	public static void main(String[] args) {
		//List<Integer> tr = new ArrayDeque<Integer>(Integer.class);
		List<Integer> tr = new Treque<Integer>(Integer.class);
		int K = 10;
		Stopwatch s = new Stopwatch();
		System.out.print("Appending " + K + " items...");
		System.out.flush();
		s.start();
		for (int i = 0; i < K; i++) {
			tr.add(i);
		}
		s.stop();
		System.out.println("done (" + s.elapsedSeconds() + "s)");

		System.out.print("Prepending " + K + " items...");
		System.out.flush();
		s.start();
		for (int i = 0; i < K; i++) {
			tr.add(0, i);
		}
		s.stop();
		System.out.println("done (" + s.elapsedSeconds() + "s)");

		System.out.print("Midpending(?!) " + K + " items...");
		System.out.flush();
		s.start();
		for (int i = 0; i < K; i++) {
			tr.add(tr.size()/2, i);
		}
		s.stop();
		System.out.println("done (" + s.elapsedSeconds() + "s)");

		System.out.print("Removing " + K + " items from the back...");
		System.out.flush();
		s.start();
		for (int i = 0; i < K; i++) {
			tr.remove(tr.size()-1);
		}
		s.stop();
		System.out.println("done (" + s.elapsedSeconds() + "s)");

		System.out.print("Removing " + K + " items from the front...");
		System.out.flush();
		s.start();
		for (int i = 0; i < K; i++) {
			tr.remove(0);
		}
		s.stop();
		System.out.println("done (" + s.elapsedSeconds() + "s)");

		System.out.print("Removing " + K + " items from the middle...");
		System.out.flush();
		s.start();
		for (int i = 0; i < K; i++) {
			tr.remove(tr.size()/2);
		}
		s.stop();
		System.out.println("done (" + s.elapsedSeconds() + "s)");
	}



}
